'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.load_ipython_extension = load_ipython_extension;
/**
 * This file contains the javascript that is run when the notebook is loaded.
 * It contains some requirejs configuration and the `load_ipython_extension` 
 * which is required for any notebook extension.
 */

/**
 * Configure requirejs.
 */
if (window.require) {
  window.require.config({
    map: {
      '*': {
        'jupyterlab_skdata_renderer': 'nbextensions/jupyterlab_skdata_renderer/index'
      }
    }
  });
}

/**
 * Export the required load_ipython_extention.
 */
function load_ipython_extension() {
  define(['nbextensions/jupyterlab_skdata_renderer/index', 'base/js/namespace'], function (Extension, Jupyter) {
    var notebook = Jupyter.notebook;

    Extension.register_renderer(notebook);
    Extension.render_cells(notebook);
  });
}