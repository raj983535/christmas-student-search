# Christmas Student Search

A lightweight, mobile-optimized web application to upload, parse, and search student fee and enrollment records from Excel, CSV, PDF, and plain text files directly in the browser.

## Overview

Christmas Student Search processes tabular student data entirely on the client side. No data is transmitted to external servers, providing fast search capabilities and complete data privacy.

## Features

- **Multi-Format Ingestion**: Supports `.xlsx`, `.xls`, `.csv`, `.pdf`, and `.txt` files.
- **Intelligent Column Detection**: Automatically detects column headers (such as Student Name, Fee, and Payment Status) regardless of column order.
- **Client-Side Document Parsing**: Uses SheetJS for spreadsheets and PDF.js for text extraction with row reconstruction.
- **Multi-Tier Search Engine**: Matches records by exact query, phrase, multi-word tokens, or partial names.
- **Data Privacy & Security**: 100% in-browser processing with input sanitization against XSS.
- **Responsive Layout**: Designed for mobile and desktop screens.

## Project Structure

```text
christmas/
├── index.html            # Core application markup, styles, and logic
├── server.js             # Local development server (zero dependencies)
├── package.json          # Project configuration and start scripts
├── .gitignore            # Git ignore configuration
├── sample-data/          # Sample datasets for testing
│   ├── students_sample.csv
│   └── students_sample.txt
└── README.md             # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended for running the local server), or any modern web browser.

### Installation & Execution

1. Clone the repository:
   ```bash
   git clone https://github.com/raj983535/christmas-student-search.git
   cd christmas-student-search
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open your browser and navigate to:
   ```text
   http://localhost:3000
   ```

Alternatively, open `index.html` directly in any web browser without running a server.

## Testing with Sample Data

Pre-formatted test data is available in the `sample-data/` folder:
- `sample-data/students_sample.csv`
- `sample-data/students_sample.txt`

1. Open the application.
2. Select or drag and drop `sample-data/students_sample.csv` into the upload zone.
3. Search for names such as `Alice`, `Bob Smith`, or `Miller`.

## Technology Stack

- **HTML5 & CSS3**: Responsive flexbox layout, CSS variables, and animation effects
- **JavaScript (ES6+)**: Vanilla client-side script
- **SheetJS (xlsx)**: Spreadsheet parsing library
- **PDF.js**: Client-side PDF text extraction
- **Google Fonts**: Poppins and Mountains of Christmas

## License

This project is licensed under the MIT License.
