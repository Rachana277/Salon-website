const stats = [
  { label: 'Appointments Today', value: 12 },
  { label: 'Staff Available', value: 7 },
  { label: 'Products in Stock', value: 136 },
  { label: 'Customer Rating', value: '4.9 / 5' },
];

export default function Dashboard() {
  return (
    <section id="dashboard" className="section-card">
      <h3>Salon Dashboard</h3>
      <div className="grid">
        {stats.map((item) => (
          <article key={item.label} className="card">
            <p className="metric-value">{item.value}</p>
            <p>{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
