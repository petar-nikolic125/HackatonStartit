export default function Pricing() {
  return (
    <div className="p-8 space-y-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-center">Pricing</h1>
      <div className="pricing-grid">
        <div className="pricing-card">
          <div className="card-header">
            <div className="plan-tier">Free</div>
            <div className="plan-price">$0</div>
          </div>
          <ul className="features-list">
            <li className="feature-item">Basic features</li>
          </ul>
          <button className="select-btn">Select</button>
        </div>
        <div className="pricing-card popular">
          <span className="popular-badge">Most Popular</span>
          <div className="card-header">
            <div className="plan-tier">Pro</div>
            <div className="plan-price">$29/mo</div>
          </div>
          <ul className="features-list">
            <li className="feature-item">Advanced features</li>
          </ul>
          <button className="select-btn">Select</button>
        </div>
        <div className="pricing-card">
          <div className="card-header">
            <div className="plan-tier">Premium</div>
            <div className="plan-price">$99/mo</div>
          </div>
          <ul className="features-list">
            <li className="feature-item">All features</li>
          </ul>
          <button className="select-btn">Select</button>
        </div>
      </div>
    </div>
  );
}
