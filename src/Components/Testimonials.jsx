import React from 'react'

const Testimonies = [
    { name: "Miss. Abakaliki", testimony: "The cake was absolutely stunning and delicious! It was the highlight of our event and received so many compliments. Thank you for making our celebration extra special!" },
    { name: "Mr. Lagos", testimony: "I ordered a custom cake for my daughter's birthday, and it exceeded all expectations. The design was beautiful, and the taste was out of this world. Highly recommend!" },
    { name: "Ms. Abuja", testimony: "The attention to detail and craftsmanship in the cake was exceptional. It was not only a feast for the eyes but also a delight for the taste buds. Thank you for making our occasion unforgettable!" }
]

const Testimonials = () => {
  return (
    <section className='p-10'>
          <h2 className="text-accent uppercase tracking-[0.2em] text-sm font-bold mb-3">Client Experiences</h2>

          <div className='flex flex-col sm:flex-row gap-5 overflow-hidden'>
              {Testimonies.map((testimony, index) => (
                  <div key={index} className='bg-light p-5 rounded-lg shadow-md'>
                      <p className="text-gray-600 italic mb-2">"{testimony.testimony}"</p>
                      <p className="font-bold text-accent">- {testimony.name}</p>
                  </div>
              ))}
          </div>
    </section>
  )
}

export default Testimonials
