# Playwright101

Create project
```
$npm init playwright@latest
```

Run test
```
$npx playwright test
```

Run test in UI Mode
```
$npx playwright test --ui
```

Auto generate code
```
$npx playwright codegen
```

Show report
```
$npx playwright show-report
```

---

Robot Selenium Set up
# LOCAL

1. Install Python 

   - Download Installer
   
   https://www.python.org/downloads/

   - Mac using [Homebrew](https://brew.sh)
   
   ```sh
   brew install python
   ```  

3. Install Chormedriver (ตรวจสอบ Chrome browser version เพื่อ Install Chormedriver version ที่ support)

   - Installer
   
   https://chromedriver.chromium.org/downloads

   - Mac

   ```sh
   brew install --cask chromedriver
   ```   

# VENV

1. Setup

   ```sh
   python -m venv .venv
   ```

2. Activate

   - Linux, Mac

     ```sh
     source .venv/bin/activate
     ```

   - Windows

     ```sh
     .venv\Scripts\activate.bat
     ```

   - Windows PowerShell

     ```sh
     .venv\Scripts\activate.ps1
     ```

3. Deactivate

   - Linux, Mac

     ```sh
     deactivate
     ```

   - Windows

     ```sh
     .venv\Scripts\deactivate.bat
     ```

   - Windows PowerShell

     ```sh
     .venv\Scripts\deactivate.ps1
     ```

# PACKGAGE

4. Install Robot Framework
   
   ```sh
   pip install robotframework
   robot --version
   ```

6. Install SeleniumLibrary

   ```sh
   pip install robotframework-seleniumlibrary
   ```

7. Freeze Packages

   - freeze

     ```sh
     pip freeze > requirements.txt
     ```

   - re-install packages

     ```sh
     pip install -r requirements.txt
     ```
