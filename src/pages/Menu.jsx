import { useState, useEffect } from 'react'
import './Menu.css'

const menuData = {
  Starters: [
    { name: 'Veg Spring Rolls', price: 'Rs. 250', desc: 'Crispy rolls stuffed with fresh vegetables, served with sweet chili dip.', badge: 'veg', img: '/images/menu_food_spread.png' },
    { name: 'Chicken Momo', price: 'Rs. 220', desc: 'Steamed or fried Nepali dumplings with juicy chicken filling.', badge: 'popular', img: '/images/menu_food_spread.png' },
    { name: 'Paneer Tikka', price: 'Rs. 320', desc: 'Marinated cottage cheese grilled to perfection with spices.', badge: 'veg', img: '/images/menu_food_spread.png' },
    { name: 'Chicken Wings', price: 'Rs. 380', desc: 'Smoky honey-glazed wings with blue cheese dipping sauce.', badge: 'popular', img: '/images/menu_food_spread.png' },
  ],
  'Main Course': [
    { name: 'Dal Bhat Thali', price: 'Rs. 350', desc: 'Traditional Nepali platter with dal, rice, vegetables, pickle & papad.', badge: 'special', img: '/images/menu_food_spread.png' },
    { name: 'Butter Chicken', price: 'Rs. 450', desc: 'Tender chicken in a rich, creamy tomato-based curry.', badge: 'popular', img: '/images/menu_food_spread.png' },
    { name: 'Veg Biryani', price: 'Rs. 320', desc: 'Aromatic basmati rice cooked with vegetables and whole spices.', badge: 'veg', img: '/images/menu_food_spread.png' },
    { name: 'Grilled Salmon', price: 'Rs. 650', desc: 'Fresh salmon fillet with lemon butter sauce and seasonal greens.', badge: 'special', img: '/images/menu_food_spread.png' },
    { name: 'Mutton Curry', price: 'Rs. 520', desc: 'Slow-cooked tender mutton in a rich traditional Nepali gravy.', badge: 'popular', img: '/images/menu_food_spread.png' },
    { name: 'Palak Paneer', price: 'Rs. 360', desc: 'Creamy spinach-based curry with golden-fried cottage cheese cubes.', badge: 'veg', img: '/images/menu_food_spread.png' },
  ],
  Drinks: [
    { name: 'Mango Lassi', price: 'Rs. 150', desc: 'Chilled yogurt drink blended with fresh Alphonso mangoes.', badge: 'veg', img: '/images/drinks_cocktails.png' },
    { name: 'Mojito Royale', price: 'Rs. 280', desc: 'Classic mojito with fresh mint, lime, and a hint of berry.', badge: 'popular', img: '/images/drinks_cocktails.png' },
    { name: 'Blue Lagoon', price: 'Rs. 320', desc: 'A vibrant blue cocktail with citrus and tropical fruit notes.', badge: 'special', img: '/images/drinks_cocktails.png' },
    { name: 'Virgin Pina Colada', price: 'Rs. 250', desc: 'Coconut cream and pineapple blended into tropical bliss.', badge: 'veg', img: '/images/drinks_cocktails.png' },
  ],
  Desserts: [
    { name: 'Gulab Jamun', price: 'Rs. 180', desc: 'Soft milk-solid dumplings soaked in rose-flavored sugar syrup.', badge: 'veg', img: '/images/menu_food_spread.png' },
    { name: 'Chocolate Lava Cake', price: 'Rs. 280', desc: 'Warm chocolate cake with a gooey molten center, served with vanilla ice cream.', badge: 'popular', img: '/images/menu_food_spread.png' },
    { name: 'Kheer', price: 'Rs. 160', desc: 'Traditional rice pudding with cardamom, saffron, and dry fruits.', badge: 'special', img: '/images/menu_food_spread.png' },
  ],
}

const badgeMap = {
  veg: { label: '🌿 Veg', cls: 'badge-veg' },
  popular: { label: '🔥 Popular', cls: 'badge-popular' },
  special: { label: '⭐ Special', cls: 'badge-special' },
}

export default function Menu() {
  const [activeTab, setActiveTab] = useState('Starters')
  const tabs = Object.keys(menuData)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      {/* PAGE HERO */}
      <section className="page-hero" style={{ backgroundImage: "url('/images/menu_food_spread.png')" }}>
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <span className="section-tag">Culinary Delights</span>
          <h1 className="section-title">Our Menu</h1>
          <p className="breadcrumb"><a href="/">Home</a> / Menu</p>
        </div>
      </section>

      {/* MENU SECTION */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Explore</span>
            <h2 className="section-title">What's on the Table</h2>
            <div className="divider"><span>✦</span></div>
            <p className="section-subtitle">Carefully crafted with quality ingredients and served with care. Something for every palate.</p>
          </div>

          {/* TABS */}
          <div className="menu-tabs">
            {tabs.map(tab => (
              <button
                key={tab}
                className={`tab-btn${activeTab === tab ? ' active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >{tab}</button>
            ))}
          </div>

          {/* MENU GRID */}
          <div className="menu-grid">
            {menuData[activeTab].map(item => (
              <div className="menu-card" key={item.name}>
                <img className="menu-card-img" src={item.img} alt={item.name} />
                <div className="menu-card-body">
                  <div className="menu-card-header">
                    <span className="menu-card-name">{item.name}</span>
                    <span className="menu-card-price">{item.price}</span>
                  </div>
                  <p className="menu-card-desc">{item.desc}</p>
                  <span className={`menu-badge ${badgeMap[item.badge].cls}`}>{badgeMap[item.badge].label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DRINKS FEATURE */}
      <section className="drinks-feature">
        <div className="container">
          <div className="drinks-grid">
            <div className="drinks-info">
              <span className="section-tag">Our Bar</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Premium Drinks &amp; Bar</h2>
              <div className="divider" style={{ justifyContent: 'flex-start', marginLeft: 0 }}><span>✦</span></div>
              <p style={{ color: 'var(--light-muted)', lineHeight: 1.9, marginBottom: '24px' }}>From handcrafted cocktails and fine spirits to refreshing mocktails and local brews — our bar is stocked for every taste and occasion. Whether you're celebrating or simply unwinding, we have the perfect pour for you.</p>
              <div className="drinks-highlights">
                {['🍹 Signature Cocktails', '🥤 Fresh Mocktails', '🍺 Local & Craft Beers', '🥃 Premium Spirits'].map(d => (
                  <div className="drink-highlight" key={d}>{d}</div>
                ))}
              </div>
            </div>
            <div className="drinks-img-wrap">
              <img src="/images/drinks_cocktails.png" alt="Drinks & Bar" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
