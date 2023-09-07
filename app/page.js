import Supervisor from './images/icon-supervisor.svg'
import TeamBuilder from './images/icon-team-builder.svg'
import Karma from './images/icon-karma.svg'
import Calculator from './images/icon-calculator.svg'

import Card from './components/Card'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center bg-light-gray">
      <section className="px-7 pt-16 lg:w-[550px]">
        <article className="flex flex-col gap-2 text-center text-dark-gray">
          <h1 className="text-2xl font-extralight">
            Reliable, efficient delivery
          </h1>
          <h2 className="text-2xl font-semibold">Powered by Technology</h2>
          <p className="pt-3 text-body font-normal text-gray">
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </article>
      </section>

      <section className="grid grid-flow-col grid-rows-5 gap-8 px-7 py-16 lg:mx-14 lg:grid-cols-3 lg:grid-rows-2 lg:items-center">
        <Card
          rowSpan="lg:row-span-full"
          border="border-t-cyan"
          h2="Supervisor"
          p="Monitors activity to identify project roadblocks"
          icon={Supervisor}
        />
        <Card
          border="border-t-red"
          h2="Team Builder"
          p="Scans our talent network to create the optimal team for your project"
          icon={TeamBuilder}
        />
        <Card
          border="border-t-orange"
          h2="Karma"
          p="Regularly evaluates our talent to ensure quality"
          icon={Karma}
        />
        <Card
          rowSpan="lg:row-span-full"
          border="border-t-blue"
          h2="Calculator"
          p="Uses data from past projects to provide better delivery estimates"
          icon={Calculator}
        />
      </section>
    </main>
  )
}
