import React from "react";
import _ from "lodash";

import { Layout } from "../components/index";
import DocsMenu from "../components/DocsMenu";
import { htmlToReact, getPages, Link, safePrefix, toStyleObj } from "../utils";

export default class Docs extends React.Component {
  render() {
    let root_page_path =
      _.get(this.props, "pageContext.site.data.doc_sections.root_folder") +
      "index.md";
    let current_page_path = "/" + _.get(this.props, "pageContext.relativePath");
    let child_pages_path = "/" + _.get(this.props, "pageContext.relativeDir");
    let child_pages = _.orderBy(
      _.filter(
        getPages(this.props.pageContext.pages, child_pages_path),
        (item) => _.get(item, "base") !== "index.md"
      ),
      "frontmatter.weight"
    );
    let child_count = _.size(child_pages);
    let has_children = child_count > 0 ? true : false;
    return (
      <Layout {...this.props}>
        <article className="post page post-full">
          <header
            className="post-header bg-gradient outer"
            style={{ paddingBottom: "3em" }}
          >
            {_.get(this.props, "pageContext.frontmatter.img_path") && (
              <div
                className="bg-img"
                style={toStyleObj(
                  "background-image: url('" +
                    safePrefix(
                      _.get(this.props, "pageContext.frontmatter.img_path")
                    ) +
                    "')"
                )}
              />
            )}
            <div className="inner-small">
              <h1 className="post-title">Local Creations</h1>
              <div className="post-subtitle">
                Discover some awesome creations done by local designers,
                developers and creators in response to COVID-19.
              </div>
            </div>
          </header>
          <div className="outer">
            <div className="inner" style={{ maxWidth: "1400px" }}>
              <div className="docs-content">
                <DocsMenu
                  {...this.props}
                  page={this.props.pageContext}
                  site={this.props.pageContext.site}
                />
                <article
                  className="post type-docs"
                  style={{ maxWidth: "inherit" }}
                >
                  <div className="post-inside" style={{ padding: "1em 0 0;" }}>
                    <header
                      className="post-header"
                      style={{
                        color: "rgb(66, 75, 95)",
                        position: "inherit",
                        textAlign: "inherit",
                        paddingTop: "inherit",
                        paddingBottom: "4em",
                      }}
                    >
                      <h1 className="post-title line-left">
                        {_.get(this.props, "pageContext.frontmatter.title")}
                      </h1>
                    </header>
                    <div className="post-content" style={{ border: "0" }}>
                      {htmlToReact(_.get(this.props, "pageContext.html"))}
                      {root_page_path !== current_page_path && (
                        <React.Fragment>
                          {has_children && (
                            <ul className="docs-section-items">
                              {_.map(
                                child_pages,
                                (child_page, child_page_idx) => (
                                  <li
                                    key={child_page_idx}
                                    className="docs-section-item"
                                  >
                                    <Link
                                      to={safePrefix(_.get(child_page, "url"))}
                                      className="docs-item-link"
                                    >
                                      {_.get(child_page, "frontmatter.title")}
                                      <span
                                        className="icon-angle-right"
                                        aria-hidden="true"
                                      />
                                    </Link>
                                  </li>
                                )
                              )}
                            </ul>
                          )}
                        </React.Fragment>
                      )}
                    </div>
                  </div>
                </article>
                <nav id="page-nav" className="page-nav">
                  <div id="page-nav-inside" className="page-nav-inside sticky">
                    <h2 className="page-nav-title">Jump to Section</h2>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </article>
      </Layout>
    );
  }
}
