const services = [
  { name: 'Hair Styling', price: '$45' },
  { name: 'Facial Treatment', price: '$60' },
  { name: 'Manicure & Pedicure', price: '$50' },
  { name: 'Bridal Makeup', price: '$120' },
];

export default function Services() {
  return (
    <section id="services" className="section-card">
      <h3>Popular Services</h3>
      <div className="grid">
        {services.map((service) => (
          <article key={service.name} className="card">
            <h4>{service.name}</h4>
            <p>Starting at {service.price}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
