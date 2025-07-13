# 🛒 Mini E-Commerce React App

A mini e-commerce frontend built using **React** and **Zustand** for state management. This project simulates a product listing, search, cart management, and product detail navigation.

---

## 📦 Project Structure

```
src/
│
├── components/
│   ├── layout/
│   │   ├── AddToCart.jsx
│   │   ├── Detail.jsx
│   │   ├── Footer.jsx
│   │   └── Header.jsx
│   ├── product/
│   │   ├── ProductCard.jsx
│   │   ├── ProductDetailContent.jsx 
│   │   ├── ProductDetailInfo.jsx 
│   │   └── ProductListItem.jsx
│   │
│   └── ui/
│       ├── Breadcrumb.jsx
│       ├── ImageGallery.jsx
│       ├── ItemsPerPageSelect.jsx
│       ├── SearchBar.jsx
│       ├── SortSelect.jsx
│       └── ViewToggle.jsx
│
├── data/
│   └── products.json
│
├── pages/
│   ├── ProductDetailPage.jsx
│   └── ProductListingPage.jsx
│
├── routes/
│   └── AppRoutes.jsx
│
├── store/
│   └── cartStore.js
│
└── styles/
    ├── add-to-cart.css
    ├── breadcrumb.css
    ├── cart-modal.css
    ├── detail-page.css
    ├── detail.css
    ├── image-gallery.css
    ├── modal.css
    ├── pagination.css
    ├── product-card.css
    ├── product-list-item.css
    ├── product-list.css
    ├── search-view-toggle.css
    ├── shop-footer.css
    ├── shop-header.css
    └── sort-select.css


```

---

## 🚀 Setup Instructions

1. **Clone the repository**  
```bash
git clone https://github.com/filipdev3/mini-eCommerce-app.git
cd mini_eCommerce
```

2. **Install dependencies**  
```bash
npm install
```

3. **Run the development server**  
```bash
npm run dev
```

4. **Open in browser**  
CTRL + Left Click on link in terminal

---

## ⚙️ Framework Choice Justification

- **React (JavaScript):**  
  Chosen for its component-based architecture and reusable structure. React is good for building dynamic UIs like product listings and detail pages.

- **Zustand:**  
  Zustand is lightweight and intuitive tool. Also, it's good fit for managing the shopping cart globally across different components.

- **No TypeScript:**  
  JavaScript was used to keep the project more accessible and focused on logic rather than type safety.

---

## 🧠 Architecture Decisions

- **Component based:**  
  The UI is built of small reusable components such as `ProductCard`, `AddToCartModal`, `Breadcrumb`... This makes maintainability and scalability easier.

- **State Management with Zustand:**  
  Zustand was used for global state like the shopping cart. Local states (like search input, modal visibility...) is managed via `useState`.

- **Routing with React Router:**  
  Used for navigating between the main listing and individual product detail pages.

- **Modals over pages:**  
  The `AddToCartModal` and `CartModal` were implemented as modals instead of separate pages to improve UX.

---

## ✅ Core Requirements

### 1. Product Listing Page (PLP)
- [x] Display products in both grid (default) and list view with toggle
- [x] Each product card shows image, name, price, short description, "Add to Cart" 
        button with quantity selector
- [x] Implement responsive design (mobile-first approach)
- [x] Handle loading states and empty states gracefully

### 2. Product Detail Page (PDP)
- [x] Route to individual product (/product/:id) 
- [x] Display: image gallery, full description, technical specs table, price, "Add to 
        Cart" with quantity
- [x] Implement breadcrumb navigation 
- [x] Handle invalid product IDs (404 state)

### 3. Search & Filtering
- [x] Search input with debounced search (300ms delay)
- [x] Real-time filtering by product name 
- [x] Clear search functionality 
- [x] Show search results count

### 4. Sorting & Pagination
- [x] Sorting options: Price (Low→High, High→Low), Name (A→Z, Z→A)
- [x] Items per page: 5, 10, 15, 20
- [x] Pagination with: Previous/Next buttons, page numbers, jump to first/last
- [x] Maintain sort/filter state during pagination

### 5. Shopping Cart
- [x] Add items to cart with quantity
- [x] Update quantity for existing items
- [x] Cart icon with item count in header
- [x] Cart state persists across page navigation

### 6. State Management
- [x] Use appropriate state management solution for your chosen framework
- [x] Manage: products, cart, filters, pagination state 
- [x] Persist cart to localStorage 
---

##  Self-Assessment

###  Challenges Faced
- **Zustand Local Storage Sync:** 


###  What I'd Improve With More Time

- **Definitive design** elements position and styling
-  **Add unit tests** to ensure all components behave correctly.

---

## 👤 Author

**Filip Kulić**  
📍 Serbia  
🧑‍💻 Frontend Developer (React, JavaScript)  
