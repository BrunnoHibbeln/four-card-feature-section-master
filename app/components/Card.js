import Image from 'next/image'

export default function Card({ rowSpan, border, h2, p, icon }) {
  return (
    <section
      className={`text-dark-gray ${border} shadow-blue/20 flex flex-col gap-2 rounded-md border-t-4 shadow-xl ${rowSpan}`}
    >
      <article className="p-8">
        <h2 className="text-xl font-semibold">{h2}</h2>
        <p className="text-body text-gray pt-3 font-normal">{p}</p>
      </article>

      <picture className="flex justify-end p-8 pt-0">
        <Image src={icon} alt="Supervisor Icon" />
      </picture>
    </section>
  )
}
