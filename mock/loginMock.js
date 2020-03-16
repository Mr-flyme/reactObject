export default {
    // 支持值为 Object 和 Array
    'POST /api/auth/oauth/token': {
      success: true,
      data: {
        "username": 'daoyi',
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsaWNlbnNlIjoiY3 JlYXRlIGJ5IEdyZWVudG93biIsInVzZXJfaWQiOjYxLCJ1c2VyX25hbWUiOiIxNTAxMzY2OTY4M iIsInNjb3BlIjpbInNlcnZlciJdLCJlcnJvckNvZGUiOjAsImV4cCI6MTU4MjExNjA1MiwianRp IjoiY2NlNmY4MTItNGJmMC00NWRiLTk3NjYtZTAwNGNmZWFjNmMzIiwiY2xpZW50X2lkIjoicnV 4aW4ifQ.wy9szFslyWmZ1mmXW0oLzD0rv7VfYA6jy5k91se2i28",
        "token_type": "bearer",
        "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJsaWNlbnNlIjoiY3JlYXRlIGJ5IEdyZWVudG93biIsInVzZXJfaWQiOjYxLCJ1c2VyX25hbWUiOiIxNTAxMzY2OTY4MiIsInNjb3BlIjpbInNlcnZlciJdLCJhdGkiOiJjY2U2ZjgxMi00YmYwLTQ1ZGItOTc2Ni1lMDA0Y2ZlYWM2YzMiLCJlcnJvckNvZGUiOjAsImV4cCI6MTU4NDEwMzI1MiwianRpIjoiOTIxM2NlOTctZmIzZS00Nzk1LWE2OTAtY2NmMDU5ODU3NzMzIiwiY2xpZW50X2lkIjoicnV4aW4ifQ.8SSSz8eYkUZfbc7NXU4oqAZ_XvrnuMF1RjiZ‐KgRezQ",
        "expires_in": 604799,
        "scope": "server",
        "license": "create by Greentown",
        "user_id": 61,
        "errorCode": 0,
        "jti": "cce6f812‐4bf0‐45db‐9766‐e004cfeac6c3"
      }
    },
  
    // GET POST 可省略
    '/api/users/1': { id: 1 },
  
    // 支持自定义函数，API 参考 express@4
    'POST /api/users/create': (req, res) => { res.end('OK'); },
  };