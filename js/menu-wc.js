'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">HungKu documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-16c5baba10abe984bda5f03c79e0c8b2"' : 'data-target="#xs-components-links-module-AppModule-16c5baba10abe984bda5f03c79e0c8b2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-16c5baba10abe984bda5f03c79e0c8b2"' :
                                            'id="xs-components-links-module-AppModule-16c5baba10abe984bda5f03c79e0c8b2"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModalAddEditPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalAddEditPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModalEventosPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalEventosPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModalSoloAddPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalSoloAddPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ModalAddEditPageModule.html" data-type="entity-link">ModalAddEditPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ModalAddEditPageModule-ce7b5e7da6aca30e08fba436df14e461"' : 'data-target="#xs-components-links-module-ModalAddEditPageModule-ce7b5e7da6aca30e08fba436df14e461"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ModalAddEditPageModule-ce7b5e7da6aca30e08fba436df14e461"' :
                                            'id="xs-components-links-module-ModalAddEditPageModule-ce7b5e7da6aca30e08fba436df14e461"' }>
                                            <li class="link">
                                                <a href="components/ModalAddEditPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalAddEditPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ModalEventosPageModule.html" data-type="entity-link">ModalEventosPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ModalEventosPageModule-7bd70658c14e14b4b5929e350dce513a"' : 'data-target="#xs-components-links-module-ModalEventosPageModule-7bd70658c14e14b4b5929e350dce513a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ModalEventosPageModule-7bd70658c14e14b4b5929e350dce513a"' :
                                            'id="xs-components-links-module-ModalEventosPageModule-7bd70658c14e14b4b5929e350dce513a"' }>
                                            <li class="link">
                                                <a href="components/ModalEventosPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalEventosPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ModalSoloAddPageModule.html" data-type="entity-link">ModalSoloAddPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ModalSoloAddPageModule-b210e0fb08c650db3991ef7293612ebe"' : 'data-target="#xs-components-links-module-ModalSoloAddPageModule-b210e0fb08c650db3991ef7293612ebe"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ModalSoloAddPageModule-b210e0fb08c650db3991ef7293612ebe"' :
                                            'id="xs-components-links-module-ModalSoloAddPageModule-b210e0fb08c650db3991ef7293612ebe"' }>
                                            <li class="link">
                                                <a href="components/ModalSoloAddPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalSoloAddPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Tab3PageModule.html" data-type="entity-link">Tab3PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Tab3PageModule-a4d8a6e7679fa53e0b113808156cfca7"' : 'data-target="#xs-components-links-module-Tab3PageModule-a4d8a6e7679fa53e0b113808156cfca7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab3PageModule-a4d8a6e7679fa53e0b113808156cfca7"' :
                                            'id="xs-components-links-module-Tab3PageModule-a4d8a6e7679fa53e0b113808156cfca7"' }>
                                            <li class="link">
                                                <a href="components/Tab3Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Tab3Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TabInicioPageModule.html" data-type="entity-link">TabInicioPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TabInicioPageModule-f79b490aafe7d928e3fe7ea16ec44e37"' : 'data-target="#xs-components-links-module-TabInicioPageModule-f79b490aafe7d928e3fe7ea16ec44e37"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TabInicioPageModule-f79b490aafe7d928e3fe7ea16ec44e37"' :
                                            'id="xs-components-links-module-TabInicioPageModule-f79b490aafe7d928e3fe7ea16ec44e37"' }>
                                            <li class="link">
                                                <a href="components/TabInicioPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TabInicioPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TabListadoPageModule.html" data-type="entity-link">TabListadoPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TabListadoPageModule-91e138e2ef6ac787d48cdf935e51038e"' : 'data-target="#xs-components-links-module-TabListadoPageModule-91e138e2ef6ac787d48cdf935e51038e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TabListadoPageModule-91e138e2ef6ac787d48cdf935e51038e"' :
                                            'id="xs-components-links-module-TabListadoPageModule-91e138e2ef6ac787d48cdf935e51038e"' }>
                                            <li class="link">
                                                <a href="components/TabListadoPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TabListadoPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TabsPageModule.html" data-type="entity-link">TabsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TabsPageModule-e6ccbadaa8966524f71282d795d07498"' : 'data-target="#xs-components-links-module-TabsPageModule-e6ccbadaa8966524f71282d795d07498"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TabsPageModule-e6ccbadaa8966524f71282d795d07498"' :
                                            'id="xs-components-links-module-TabsPageModule-e6ccbadaa8966524f71282d795d07498"' }>
                                            <li class="link">
                                                <a href="components/TabsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TabsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TabsPageRoutingModule.html" data-type="entity-link">TabsPageRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/TodoservicioService.html" data-type="entity-link">TodoservicioService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});