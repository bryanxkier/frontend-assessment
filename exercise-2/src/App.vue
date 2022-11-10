<template>

  <div class="container section">

    <ul class="nav nav-tabs nav-fill section__tabs" role="tablist">
      <li v-for="(section, index) in sections" :key="section.title" class="nav-item section__tabs__link">
        <a :class="'nav-link ' + [(index == 0) ? 'active' : '']"
           :id="'section' +index +'-tab'"
           data-bs-toggle="tab"
           :data-bs-target="'#section-tab-' +index"
           type="button"
           role="tab">
          {{section.title}}
        </a>
      </li>
    </ul>

    <div id="section-content" class="tab-content" role="tablist">
      <div v-for="(section, index) in sections"
           :key="section.title"
           :class="'card tab-pane fade section__accord ' + [(index == 0) ? 'active show' : '']"
           :id="'section-tab-' +index"
           role="tabpanel">
        <div class="card-header section__accord__link"
             role="tab"
             :id="'section' +index +'-accord'">
          <a class="collapsed"
             data-bs-toggle="collapse"
             :data-bs-target="'#section-accord-' +index">
             {{section.title}}
          </a>
        </div>
        <div :class="'section__tab__content section__accord__content collapse ' + [(index == 0) ? 'show' : '']"
             :id="'section-accord-' +index"
             data-bs-parent="#section-content">
          <div class="card-body" v-html="section.content"></div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import sectionData from './json/data.json'

export default {
  data() {
    return {
      sections: sectionData,
    };
  },
}

</script>

<style>
:root{
  --bs-tabs-border-color: #dee2e6;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 1rem;
}

.headings{
  margin: 1.5rem 0.5rem;
  border-bottom: 1px solid var(--bs-tabs-border-color);
}

.section {
  padding: 1rem;
}
.section a{
  font-family: Montserrat, sans-serif !important;
  text-transform: capitalize;
  text-decoration: none;
  color: steelblue;
  display: block;
}
.section .section__tabs {
  display: none;
}
.section .section__accord{
  margin-bottom: 1rem;
  border-color: var(--bs-tabs-border-color);
}
.section .section__accord .section__accord__link{
  background-color: unset;
  border-bottom-width: 0;
}
.section .section__tab__content, .section .section__accord__content{
  text-align: left;
}

@media (min-width: 768px) {
  .section .section__accord {
    border: none;
  }
  .section .section__tabs {
    display: flex;
  }
  .section .section__accord .section__accord__link {
    display: none;
  }
  .section .section__accord .section__accord__content {
    display: block;
  }
}

@media (max-width: 767px) {
  .section .tab-pane {
    display: block !important;
    opacity: 1!important;
  }
}
</style>
