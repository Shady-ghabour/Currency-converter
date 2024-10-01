# Project Description
This project is a simple currency converter web application that allows users to convert amounts between four different currencies: Syrian Pounds (SYP), Danish Crowns (DKK), US Dollars (USD), Euros (EUR), and Turkish lira (TRY). The application fetches real-time exchange rates and calculates the converted amount based on the user's input.

The project is built using HTML, CSS, and JavaScript.

# Features
Real-time Exchange Rates: The application fetches current exchange rates from a live API.
Four Currencies Supported: Convert between Syrian Pounds, Danish Crowns, US Dollars, and Euros.
Responsive Design: The layout adjusts to different screen sizes for an optimal user experience on all devices.
User-Friendly Interface: Simple dropdown menus and input fields for selecting currencies and entering amounts.

# Files and Their Roles
### index.html
This file contains the structure of the web page. It includes:
- Dropdown selectors for the user to choose the source and target currencies.
- Input field for the user to enter the amount they wish to convert.
- Disabled input field that displays the converted amount.
- Paragraph element to display the current exchange rate.
  
### style.css
This file contains the CSS styling for the web page, ensuring that it is visually appealing and user-friendly:
- Background image to enhance the design.
- Centered content for a clean and simple layout.
- Styled input fields and dropdowns to improve user interaction.
- Responsive design to ensure the application looks great across all devices and screen sizes.
  
### main.js
This file contains the JavaScript logic responsible for the core functionality of the currency converter:
- Fetching real-time exchange rates from a public API based on the user's selected currencies.
- Calculating the converted amount using the selected currencies and input value.
- Displaying the current exchange rate and the converted amount dynamically.
- Formatting numbers to ensure they are displayed in a user-friendly format (e.g., including thousands separators and decimal points).

# How It Works
### User Input
- The user selects the base currency and the target currency using the dropdown selectors.
- The user enters the amount they wish to convert in the input field.
- Exchange Rate Fetching
- The update() function fetches real-time exchange rates from an external API whenever the user changes the selected currencies or modifies the input amount.
- Conversion Calculation
- The application calculates the converted amount using the fetched exchange rate and the user's input. The calculated value is displayed in the disabled input field.

# Display
- The current exchange rate is shown in a paragraph below the input fields.
- The converted amount is shown in the disabled input field, formatted for better readability (e.g., 1.234,56 for European-style numbers).

# Link
https://shady-ghabour.github.io/Currency-converter/
