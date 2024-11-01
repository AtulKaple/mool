
## Getting Started


npm run dev


// Project Structure and Components

* TopBar Component

--Displays plan features and ensures a consistent top section layout.

* Products Component

--Allows selection of user count and subscription cycle (Monthly/Yearly).

--Includes a reusable OfferCard sub-component.

--Updates total pricing in real-time based on user count, reflecting changes in the Summary component.

--Data-driven: Pricing, taxes, and discounts are stored in data.js.

* InvoiceDetails Component

--Collects address details with a consistent Label and input structure.

--State selection is populated dynamically from an array in data.js.

* Summary Component

--Shows a breakdown of costs, including subtotal, GST, and total.

--PromoCode Sub-component: Validates and applies promo codes from data.js to adjust the subtotal.


--Button Sub-component: Standout purchase button for user interaction.


// Data and State Management

* Centralized Data: data.js holds subscription rates, tax rates, promo codes, and states, simplifying updates.

*Shared State: Shared states allow real-time component updates without Context API, keeping the project lightweight.


// Key Features

* Real-Time Price Updates: Adjustments in user count and plan selection update totals dynamically.

* Promo Code Validation: Valid promo codes apply relevant discounts to the subtotal.

* Dynamic Data Loading: State list is generated from data.js, allowing for easy scalability.


// Demo:

* Change user count and plan to see real-time summary updates.

* Test promo codes from data.js for discount application.
