import * as config from "config";
import { findEntity, buildProperties, buildModelFields } from "utils";
import "mv-button";
import "mv-container";
import "mv-font-awesome";
import "mv-form";
import "mv-form-field";
import "mv-tooltip";
import "../../components/form/FormField.js";
import "../../components/layout/PageLayout.js";
import UpdatePageTemplate from "../../components/page_templates/UpdatePageTemplate.js";

const entityCode = "DemoPlace";
const entity = findEntity(config, entityCode);
const properties = buildProperties(entity);
const mappings = buildModelFields(entity);

export default class DemoPlaceUpdatePage extends UpdatePageTemplate {
  static get properties() {
    return {
      ...super.properties,
      ...properties,
    };
  }

  static get model() {
    return {
      modelClass: entity.schema,
      mappings: [...mappings],
    };
  }

  constructor() {
    super();
    this.entity = entity;
  }
}

customElements.define("demo-place-update-page", DemoPlaceUpdatePage);