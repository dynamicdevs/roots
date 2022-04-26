import { SymbolIcon } from "@dynamic-devs/symbol-react"
import GridWrapper from "../../elements/organisms/GridWrapper"
import LinkCard from "../../elements/organisms/LinkCard"

export const Home = () => {

  return (
      <GridWrapper className="bg-primary-grey-600">
        <div className="col-span-4 text-center">
          <h1 className="text-heading-06 font-bold font-montserrat">Dynamic Devs</h1>
          <p className="text-paragraph-04 font-bold mt-2">
            Consultoría de desarrollo y tecnología  <span role="img" aria-label="PC">🖥️</span><br></br>
            <span role="img" aria-label="Location">📍</span>  Perú, Chile, Colombia, Venezuela, Estados Unidos
          </p>
        </div>
        <div className="col-span-4 flex space-x-6 justify-center text-secondary-blue-400">
          <SymbolIcon name="linkedin" iconClass="symbol-md" type="outline" />
          <SymbolIcon name="instagram" iconClass="symbol-md" type="outline" />
          <SymbolIcon name="youtube" iconClass="symbol-md" type="outline" />
          <SymbolIcon name="spotify" iconClass="symbol-md" type="outline" />
          <SymbolIcon name="twitch" iconClass="symbol-md" type="outline" />
        </div>
        <div className="col-span-4 flex flex-col space-y-2">
          <LinkCard iconName="dynamic" text="La web de Dynamic Devs" url="https://www.twitch.tv/dynamicdevs" />
          <LinkCard iconName="briefcase" text="Trabaja con nosotros" url="https://www.twitch.tv/dynamicdevs" />
          <LinkCard iconName="microphone" text="Escucha lo último del Podcast" url="https://www.twitch.tv/dynamicdevs" />
          <LinkCard iconName="speak" text="DevTalks: Charlas de innovación" url="https://www.twitch.tv/dynamicdevs" />
        </div>
      </GridWrapper>
  )
}