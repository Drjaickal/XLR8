

**XLR-8 AI Image Generator**

This project lets you generate creative images based on textual prompts using the power of OpenAI's API and Cloudinary for image storage.

**Features**

- Generate unique images from text descriptions.
- Leverage OpenAI's advanced image generation capabilities (requires a paid OpenAI API key).
- Store and manage generated images using Cloudinary (separate signup required).

**Prerequisites**

- **Node.js and npm (or yarn):** Ensure you have these installed for project dependencies. You can download them from the official Node.js website ([https://nodejs.org/en/download](https://nodejs.org/en/download)).
- **OpenAI API Key:** Sign up for an OpenAI account ([https://openai.com/](https://openai.com/)) and obtain an API key. **Important:** This project requires a paid OpenAI plan to access image generation functionality.
- **Cloudinary Account:** Create a free or paid Cloudinary account ([https://cloudinary.com/](https://cloudinary.com/)) for image storage. You'll need your API key, secret, and cloud name for configuration.

**Installation**

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/ai-image-generator.git
   ```

2. Navigate to the project directory:

   ```bash
   cd ai-image-generator
   ```

3. Install dependencies:

   ```bash
   npm install
   ``` (or `yarn install` if using yarn)

**Configuration**

1. Create a `.env` file in the project root directory (**ignore this file in Git**).

2. Add the following environment variables to the `.env` file, replacing placeholders with your actual values:

   ```
   OPENAI_API_KEY=your_openai_api_key
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

**Usage**

1. Start the development server:

   ```bash
   npm start
   ``` (or `yarn start`)

2. Open http://localhost:3000 (or the port specified in your code) in your browser.

3. Enter a text prompt describing the image you want to generate.

4. Click the "Generate Image" button.

**Generated Images**

- Images will be stored in Cloudinary using the configuration you provided.
- The application UI may display the generated image or provide a link to it in Cloudinary.

**Running in Production**

- For deployment to a production environment, you'll need suitable hosting for your Node.js application. Make sure your environment variables are properly set on your production server.
- Consider security best practices, such as using environment variables to store API keys and secrets.

**Disclaimer**

- Note that this project requires a paid OpenAI plan to access image generation functionality. Free plans may have limitations.

![xlr-8 3](https://github.com/Drjaickal/XLR8/assets/105309360/ff2c5968-3011-495e-ae17-85cf87f70f0a)
![xlr-8 2](https://github.com/Drjaickal/XLR8/assets/105309360/cba0131e-7f20-460c-9442-b85ffcd5d158)
![xlr-8 1](https://github.com/Drjaickal/XLR8/assets/105309360/91f1e1d8-9fa6-4d50-b96d-6248d08d8af9)
