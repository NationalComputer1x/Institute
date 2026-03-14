/** @type {import('next').NextConfig} */
//const withImages = require('next-images')
const nextConfig = {
  reactStrictMode: true,
  //withImages,
  env: {
    // This value will be replaced at build time with "my-static-value"
    FIREBASE_PROJECT_ID: 'nationalcomputer1x-9d5d4',
    // You can also read from a .env file variable here at build time
    FIREBASE_CLIENT_EMAIL: 'firebase-adminsdk-fbsvc@nationalcomputer1x-9d5d4.iam.gserviceaccount.com',
    FIREBASE_PRIVATE_KEY:'-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDhfdM3lFDunAVq\nEVDj38LNY/p2XkqhsAy6EYfiXZLE3oYQo5JaW8dt5NuAyn1/MLRvKr5HU0C+dUbW\ntWyOlPHGWfTP4N5v7aDeIPJ2eoK0fRVlPt1WIScl4oKkXoX3js+hKuDcEIX6V30I\n8vUjxgZn0NPQvqkgy33iWzTL7I9Oy4yJ2kaqG02FpnWgiLQrFyEsrdiNd9k5dGeK\nTbLUXeoeZiLZKZn3rd7FoL1GlpQwtnD+FegmaahvHGbEvZCuzSVRIMV3PuuEtcHy\nDVeFoYatE6LxFPAMNi2FV+Ji8QzEVFcI/iSTvkv+qVKM4yLDyCHr3mynPeGGWAXF\nf1mqZKpzAgMBAAECggEAAnXH9yREGcZT/MtBkargSjNcCSyQLeFo0iLc06hnsIQo\n/Ed8kkXMEDPd/TK4WcnjPg8+UjLjUvCenDsQeyG+3YYfuKDgbGIwThwX6Rj/Eg8H\nS7p62bS046HsAPUTCxdgxoZcO6pme8u2joFwETrY2QsbNHzQBY6SygRquArVqWtj\n1+rtsNQQjhS0CGEX6B4iqGvw5SqpPMdobIi8D6BtWLrrGxWjWCQkuqaMIOLDCOcJ\nvKeAU01deh63/Kd0sWTUSqo/GxU2fl9Ve+iL/bCOGo1lJz153G57LssIP4maYvB9\ngJ5erbFXjn4+IjCg98lVHYOl06Dwf86ablD+g8AGiQKBgQDziuji5ATOi9+NSOZt\nUcb5TKEtYvl+pVDzYF0UAfPyuDcre+hwdYiFawXSMAFUeb8I8lrFnTLIkX/2bV/H\ncVSYKdJOv2PONOIQLq6O2fEapR/bNzJDzBq4bZFY2X0GlnZxQzTV/JwUpYIBNVsF\nQw4ZesbO71C5jjXTd3Din4HxNwKBgQDtBoshQ9kiMNKuqwM0J7WP3a/Sgxa8KqSi\nXzs88naB57Mkef1Ws2GL6V1qCbuWeyW5Es559/XKNZ6MfjwBgauBhOu56YJ4wtH0\noVhgCaieef0x1k2w8CQwQChElsEHxm/SCpN+i6tByl3fsA2bvjPNa3LLcuh0rlcZ\n/KD29H5epQKBgQDpt5wI6YPHZ6oQny4rKPiHFEf1E2+VXzbRaN/KLJmci7a+LzoA\nenqadvtuG42bMP7oqhP8YwByRFeF+K6a6qKhKDlgQwGXyV5M40+3XWWpCWAJ8u10\n7LGT3epHVuhJ4yklRra0yKhMlAyv9jE0WoZ0Y0PZIQbaG6SCHLSjdymvfwKBgDUp\nUY09dXbosmhArPBGs783vpadljzP56sPZu7thszuFczpm3uVshw6VBxTYIKIzlYr\nNKpAhh07V3s1WOoRllDvahuBlyTUtViD05l+sRYSUEqcQUKdKdC0oxN3KIZA6JWY\nj6pDUz7nT5S7HOJAj8fUAKRG+oIpFBodAlFBVxKNAoGAUZ1Ytog3k47/a4uTJkij\n/yvnKIh1pWTUUqIUWi8VGjXdhxgT11T+cWSa4SeH4/JTIuz1i5UenPm54wBpxC4y\nUb0kjnam5K9OnzkzqrcBEK2azct2v+CCX9AwaRj3Js+aVb/+wjl8nq9bQCU/w8rv\njKrnxipRbcUAK2xDMvilUJ8=\n-----END PRIVATE KEY-----\n',
    NEXT_PUBLIC_FIREBASE_API_KEY: 'AIzaSyAvbJx9zzc-QgnFjrFvx6j0ndHvtOE31Ds',
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: 'nationalcomputer1x-9d5d4.firebaseapp.com',
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: 'nationalcomputer1x-9d5d4',
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: 'nationalcomputer1x-9d5d4.firebasestorage.app',
    NEXT_PUBLIC_FIREBASE_DATABASE_URL:'https://nationalcomputer1x-9d5d4-default-rtdb.firebaseio.com',
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID:'631564669548',
    NEXT_PUBLIC_FIREBASE_APP_ID:'1:631564669548:web:20c4339908939a6089be49',
  NEXT_PUBLIC_SITE_URL: 'https://nationalcomputer.in',
  }
}

module.exports = nextConfig
