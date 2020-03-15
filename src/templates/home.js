import React from "react";
import _ from "lodash";

import components, { Layout } from "../components/index";

export default class Home extends React.Component {
  async componentDidMount() {
    const res = await fetch(
      "https://covid19-jamaica.netlify.com/.netlify/functions/covid-api"
    );
    const data = await res.json();
    document.getElementById("last-update").innerHTML = new Date(
      data?.covid19Stats[0]?.lastUpdate
    ).toDateString();
    document.getElementById("confirmed").innerHTML =
      data?.covid19Stats[0]?.confirmed;
    document.getElementById("deaths").innerHTML = data?.covid19Stats[0]?.deaths;
    document.getElementById("recovered").innerHTML =
      data?.covid19Stats[0]?.recovered;
  }

  render() {
    return (
      <Layout {...this.props}>
        {_.map(
          _.get(this.props, "pageContext.frontmatter.sections"),
          (section, section_idx) => {
            let GetSectionComponent = components[_.get(section, "component")];
            return (
              <GetSectionComponent
                key={section_idx}
                {...this.props}
                section={section}
                site={this.props.pageContext.site}
              />
            );
          }
        )}
      </Layout>
    );
  }
}
