import Image from 'next/image'

export default function Card({ rowSpan, border, h2, p, icon }) {
  return (
    <section
      className={`text-dark-gray ${border} flex flex-col gap-2 rounded-md border-t-4 shadow-xl shadow-blue/20 ${rowSpan}`}
    >
      <article className="p-8">
        <h2 className="text-xl font-semibold">{h2}</h2>
        <p className="pt-3 text-body font-normal text-gray">{p}</p>
      </article>

      <picture className="flex justify-end p-8 pt-0">
        <Image src={icon} alt="Supervisor Icon" />
      </picture>
    </section>
  )
}
