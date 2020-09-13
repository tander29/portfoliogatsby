// @flow
import React from "react"
import { blurbStyle } from "../common/styleObjects"
type sectionSummaryType = {
  children: any,
  id?: string,
}
const SectionSummary = ({ children, id }: sectionSummaryType) => (
  <section id={id} style={blurbStyle}>
    {children}
  </section>
)

export default SectionSummary
