# MP4 to Text Conversion Tool

This repository contains a tool to convert MP4 files to text using OpenAI's Whisper model.

## Setup Instructions

### Backend Setup
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/garouz/mp4totext.git
   cd mp4totext
   ```
2. **Install Dependencies**:
   Ensure you have Python 3.7+ installed. You can create a virtual environment and install the required packages:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   pip install -r requirements.txt
   ```
3. **Run the Backend**:
   ```bash
   python app.py
   ```

### Frontend Setup
1. **Navigate to Frontend Directory**:
   ```bash
   cd frontend
   ```
2. **Install Node.js and npm**:
   Ensure that you have Node.js installed. If not, download it from [nodejs.org](https://nodejs.org/).
3. **Install Frontend Dependencies**:
   ```bash
   npm install
   ```
4. **Run the Frontend**:
   ```bash
   npm start
   ```

Now, you should be able to access the application in your browser.

## Usage Instructions
1. Upload your MP4 file via the frontend.
2. Click on the convert button to start the conversion process.
3. Download the resulting text file after conversion is complete.

## License
This project is licensed under the MIT License.