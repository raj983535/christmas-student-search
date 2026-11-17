# 🎄 Holiday Student Data & Fee Search

A lightweight, mobile-first holiday web application to upload, parse, and search student fee and enrollment records from **Excel (.xlsx, .xls)**, **CSV**, **PDF**, and **Plain Text (.txt)** files completely on the client side.

---

## ✨ Features

- 📱 **Mobile & Desktop Responsive**: Clean responsive card layout with festive themes and gentle snowfall animation.
- 📂 **Multi-Format Support**:
  - **Excel**: `.xlsx` and `.xls` via SheetJS.
  - **CSV**: Comma-separated files with automatic header mapping.
  - **PDF**: Client-side document text parsing via PDF.js with line-break reconstruction.
  - **Text**: Tab-separated or comma-separated `.txt` lists.
- 🧠 **Intelligent Header & Column Detection**: Automatically identifies headers (e.g., *Student Name*, *Fee Amount*, *Payment Status*) and detects column roles regardless of column order.
- 🔍 **Multi-Tier Search Engine**:
  - Exact name matching
  - Substring & phrase matching
  - Multi-word token matching (handles middle names & reordered names)
  - Partial prefix matching
- 🛡️ **Zero-Vulnerability Security**: Complete HTML escaping to prevent XSS from uploaded spreadsheet contents.
- 🚀 **Zero External Server Dependency**: 100% client-side parsing—data never leaves the user's browser, ensuring absolute student privacy.
- 📦 **Drag & Drop Upload**: Smooth drag-and-drop file upload zone with responsive touch support.
- 🔔 **Modern Toast Alerts**: Replaced blocking browser alert popups with smooth non-intrusive notification banners.

---

## 📁 Project Structure

```text
christmas/
├── index.html            # Main web application UI and logic
├── server.js             # Zero-dependency local Node.js development server
├── package.json          # Node project metadata and run scripts
├── .gitignore            # Git ignore definitions
├── sample-data/          # Ready-to-test sample files
│   ├── students_sample.csv
│   └── students_sample.txt
└── README.md             # Project documentation and guide
```

---

## 🚀 Getting Started

### Option 1: Direct Browser Launch
Since this is a client-side web application, you can simply double-click `index.html` to open it in Google Chrome, Microsoft Edge, Firefox, or Safari.

### Option 2: Run with Node.js
```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/holiday-student-search.git
cd holiday-student-search

# 2. Start the local server
npm start
```
Open your browser and navigate to:
```text
http://localhost:3000
```

---

## 🧪 Testing with Sample Data

Test files are included in the `sample-data/` folder:
- `sample-data/students_sample.csv`
- `sample-data/students_sample.txt`

1. Open the application.
2. Drag and drop or browse to select `sample-data/students_sample.csv`.
3. Try searching for names such as:
   - `Alice`
   - `Bob Smith`
   - `Emma`
   - `Miller`

---

## 🛠️ Tech Stack

- **HTML5 & CSS3** (Flexbox, CSS Animations, Backdrop Filters)
- **Vanilla JavaScript (ES6+)**
- **[SheetJS](https://sheetjs.com/)** (Excel & CSV parsing)
- **[PDF.js](https://mozilla.github.io/pdf.js/)** (Client-side PDF text extraction)
- **Google Fonts** (*Mountains of Christmas* & *Poppins*)

---

## 📄 License

This project is licensed under the MIT License.
