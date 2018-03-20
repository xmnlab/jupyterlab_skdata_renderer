# jupyterlab_skdata_renderer

A JupyterLab and Jupyter Notebook extension for rendering SKDATA

![output renderer](http://g.recordit.co/QAsC7YULcY.gif)

## Prerequisites

* JupyterLab ^0.28.0 and/or Notebook >=4.3.0

## Usage

To render SKDATA output in IPython:

```python
from jupyterlab_skdata_renderer import SKDATA

SKDATA({
    "string": "string",
    "array": [1, 2, 3],
    "bool": True,
    "object": {
        "foo": "bar"
    }
})
```

## Install

```bash
pip install jupyterlab_skdata_renderer
# For JupyterLab
jupyter lab build
# For Notebook
jupyter nbextension enable --py --sys-prefix jupyterlab_skdata_renderer
```

## Development

```bash
pip install -e .
# For JupyterLab
jupyter labextension link
jupyter lab --watch
# For Notebook
jupyter nbextension install --symlink --py --sys-prefix jupyterlab_skdata_renderer
jupyter nbextension enable --py --sys-prefix jupyterlab_skdata_renderer
```
