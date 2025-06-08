export default function Pricing() {
  return (
      <main className="p-8 space-y-6 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-center">Pricing</h1>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { tier: 'Free',    price: '$0',   features: ['Basic features'] },
            { tier: 'Pro',     price: '$29',  features: ['Advanced features'], popular: true },
            { tier: 'Premium', price: '$99',  features: ['All features'] },
          ].map((plan) => (
              <div
                  key={plan.tier}
                  className={`border rounded-xl p-6 space-y-4 ${
                      plan.popular ? 'border-indigo-500 shadow-lg' : 'border-gray-700'
                  }`}
              >
                {plan.popular && (
                    <span className="inline-block px-2 py-1 text-xs font-semibold bg-indigo-500 rounded">
                Most Popular
              </span>
                )}
                <h2 className="text-xl font-bold">{plan.tier}</h2>
                <p className="text-3xl font-bold">{plan.price}/mo</p>
                <ul className="space-y-1">
                  {plan.features.map((f) => (
                      <li key={f}>• {f}</li>
                  ))}
                </ul>
                <button className="btn-primary w-full">Select</button>
              </div>
          ))}
        </div>
      </main>
  );
}
