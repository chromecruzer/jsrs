
---

# Setup Guide

<div style="display: flex; justify-content: center; flex-wrap: wrap;">
    <img src="https://th.bing.com/th?id=OSK.smktkzDFYLP_1wwVfLNHnC-IWfgef_-2UICS6K600zM&w=102&h=102&c=7&o=6&pid=SANGAM" width="80" alt="Bun Logo" />
    <img src="https://th.bing.com/th?id=OSK.d17037552bce428ee5e857f68ab88ba3&w=46&h=46&c=11&rs=1&qlt=80&o=6&dpr=2&pid=SANGAM" width="80" alt="Rust Logo" />
    <img src="https://icon-library.com/images/node-js-icon/node-js-icon-15.jpg" width="80" alt="Node.js Logo" />
    <img src="https://spin.atomicobject.com/wp-content/uploads/deno-logo.jpg" width="80" alt="Deno Logo" />
</div>

---

# Starter Supports Cross-Platform Builds
## Build Your Own Rust Plugins and Add-Ons

### Prerequisites
Before proceeding, ensure you have the following installed on your system:
- **Rust** with `Cargo`
- **Node.js** and `npm` (required for the post-install step)

---

## Installation Steps

1. **Clone the Deno Edition Repository**:
   ```sh
   git clone -b Deno-Edition https://github.com/chromecruzer/jsrs.git
   cd jsrs
   ```

2. **Install Rust-rs Dependencies**:
   Run the following command to install necessary dependencies and create compiled machine code:
   ```sh
   deno task post-install
   ```

---

## Running the Server for Deno Serverless Runtimes

For production mode, execute:
```sh
deno task start
```

Then, open [http://localhost:8000](http://localhost:8000) in your browser.

---

> **⚠️ Warning:** This setup requires `Rust` with `Cargo` installed on your system. You may use either `Node`, `Bun`, or `Deno`, but at least one of them must be present!

---

### About This Setup
This setup is developed by **Shyam**, a Node.js architect.

--- 
