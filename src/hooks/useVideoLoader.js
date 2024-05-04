import { initializeApp } from 'firebase/app';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import { useState } from 'react';

const firebaseConfig = {
  type: 'service_account',
  project_id: 'desafiandoelequilibrio',
  private_key_id: '338d4332d9a6c34b6d7b0251ef42b193c41c4623',
  private_key:
    '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDoaj80taAHtqJl\nz8MJbaj5VpQFcTn3BeuUU9WRFIAVOc6JnHk6A9hZibNA2qQA7GKi+T2pY+l4gXYQ\nEimpEQtb9cdrL9168T1dVcNlw7peZA6oCFql8a02Ah6TPos02tSUcGmn+l8WRLQT\n9o6+fqP5or1G6W77MLSv9GRZ5ckLm5NR0i+lE0RltY4qgCIyZZaMaja77mfjNXVX\nT4ky1mHrtoJA4kIkBVPEQj+bMGEROUEhgllJMMz3rBsALBXulDj24oJBtxBSqFlA\nfHwQC8pJ8tYFWV6cuz38ooqneOOVJIPc+730wEteAeY0EXZif6yo8j7upMVecXBN\nAMYtSrtbAgMBAAECggEACmrUuW6YpS/c+JZG5jHJnJ9yVAoesIFN7WCSloWmNg1Y\nwhdG4cBRXrYK2FHUfwwZYbetOV32lYWr/o1p25+ddDpAfX/wO/X7K6dP8kxDGr7+\nXy68rWp3Oo/+wdfQUoaqd5rQSYyx3WQn9Csde9FeVS6jsD1/UXf96VMZemQPzlrN\ncVw1xz3dvZjT/6lNRfYr2tcggHKdx5O1fL1aSfw/ATXbaksJsI+QuyBuVGGWCugH\nkU0gR4K9u3HXvsaotnLgpyZIG4D5zCanqQFzdAXFkdrB/k1YbLorZgIAbhIgG9Ox\n2T6w9yUt7BS/k18B77o01nUWyUbnVL0sAp2STjbc2QKBgQD4bjw95fdc8ihH3G82\n8VQFAqUqcY+XH8cgPnLMm3ttmmtPyWzB8YixnLO8EO/G+geM4O62LmP4UQ/CGYYQ\nlFnNMa2Vp6WFUebeEIsYMtCmhzDhfPVEFFMpy4swOSbPmVAAbqpomgY376j6E1ba\ngClIh3JrqLOOH6ZHDDNhS6lNyQKBgQDvfxb0zQpNM3KkbT09aaQrRJM2a6amZGVk\n4CRqCB954Ij5i5gwAvfsec+pVeIYdQwaA2zC/UE9j9u7SCII6on6pg6DQej+EnN/\n1fOz//vcjJDnUxHnBYAqI0ls/MK++V0PfApJ6Je7vIx1Em3kHDEhGVt2g80rmTXa\ncgjK/rlCAwKBgHzqKN5S2Itis8BWZZFxzPZr+xKZYULy1pQu8lhRQcG9qIHI3Sez\nxDDSg0loFritFcjPfRgbwWalk8/cN530iibz+L1MO50KrpQwK1BylJl3Vqu6wjSG\nJ77XOth3lD1EcIaXHpZUBBZyKjv8J2rckGWIvY7Gl+o5nckRqHAetDWJAoGAL/iN\n2ZTkVlhSwzqaRJ3PY1dGAWWIqNV9NbprsM1VuKzP4uQiJKPDkxtHDA0Gz41KUj+T\nXm8pzTHuelHVd2G7J3hxebsO9y0s81MgkFJa2W9SavNJp7ODW21b/LeYLnZ2PG7F\nBM7Q7aqzm5OIbWN0N8QDfPajdvMmRU4IEtj4tI8CgYAXAqRyiqLaCn8KtrOnnwF8\n/xojvZ0wu+4UNx/SShlSiQUtGOHWzmQgaj1ljAL2IqH07Dt2trxRAnv21qmeUFMA\n+naTAIn+g3INRqPtx0d+h9zJpmqVmammkjolWGcAzaj1CrJjEwmRu4xfYnpq4WC4\nqRmd24wQfwVpSqrytdDJPw==\n-----END PRIVATE KEY-----\n',
  client_email: 'firebase-adminsdk-u63dn@desafiandoelequilibrio.iam.gserviceaccount.com',
  client_id: '106934807020010913611',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url: 'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-u63dn%40desafiandoelequilibrio.iam.gserviceaccount.com',
  universe_domain: 'googleapis.com',
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app, 'gs://desafiandoelequilibrio.appspot.com');

export const useVideoLoader = (setOffset, offset) => {
  let fileUrl = '';
  const fetchBlob = async (fetchingFile) => {
    const videoElement = document.getElementById('videoPlayer');
    videoElement.addEventListener('play', () => {
      loadNextChunk();
    });
    // Fetch the video metadata to get the total file size
    const storageRef = ref(storage, `/${fetchingFile}.mp4`);
    getDownloadURL(storageRef)
      .then((url) => {
        fileUrl = url;
        fetch(fileUrl, {
          method: 'GET',
          headers: {
            Range: 'bytes=0-1048575', // Download the first 1MB of the video
          },
        })
          .then((response) => {
            if (response.ok) {
              response.blob().then((blob) => {
                const mediaSource = new MediaSource();
                videoElement.src = URL.createObjectURL(mediaSource);

                // Load the next chunk
                loadNextChunk();
              });
            }
          })
          .catch((error) => {
            console.error('Error downloading chunk:', error);
          });
      })
      .catch((error) => {
        console.error('Error loading video:', error);
      });

    function loadNextChunk() {
      const chunkSize = 1024 * 1024;
      // Update the Range header to download the next chunk
      const rangeHeader = `bytes=${offset}-${offset + chunkSize - 1}`;
      fetch(fileUrl, {
        method: 'GET',
        headers: {
          Range: rangeHeader,
        },
      })
        .then((response) => {
          if (response.ok) {
            response.blob().then((blob) => {
              videoElement.srcObject = new Blob([videoElement.srcObject, blob], { type: 'video/mp4' });

              // Update the offset for the next chunk
              setOffset(offset + chunkSize);
              loadNextChunk();
            });
          }
        })
        .catch((error) => {
          console.error('Error downloading chunk:', error);
        });
    }
    return 'A';
  };
  return {
    fetchBlob,
  };
};
