# NestJS API

## Description
This is a simple NestJS API that provides a single GET endpoint returning a JSON object with the following data:
- Your email address
- The current datetime
- Your GitHub repository URL

## Setup Instructions
### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS recommended)
- [NestJS CLI](https://docs.nestjs.com/)

### Installation
1. Clone this repository:
   ```sh
   git clone https://github.com/PrimoCrypt/basic-details-api.git
   cd <the repo locally>
   ```
2. Install dependencies:
   ```sh
   pnpm install
   ```
3. Start the development server:
   ```sh
   pnpm start
   ```
4. The API will be available at `http://localhost:3000` by default.

## API Documentation
### Endpoint
#### GET `/api/data`
Returns a JSON object containing email, current datetime, and GitHub URL.

#### Example Request
```sh
curl -X GET http://localhost:3000/api/data
```

#### Example Response
```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/yourusername/your-repo"
}
```

## Resources
You're searching for Profesionals in the space?, check out  [Hire Node.js Developers](https://hng.tech/hire/nodejs-developers) page.

