from IPython.display import display, JSON
import json

# Running `npm run build` will create static resources in the static
# directory of this Python package (and create that directory if necessary).

def _jupyter_nbextension_paths():
    return [{
        'section': 'notebook',
        'src': 'static',
        'dest': 'jupyterlab_skdata_renderer',
        'require': 'jupyterlab_skdata_renderer/extension'
    }]

# A display class that can be used within a notebook. 
#   from jupyterlab_skdata_renderer import SKDATA
#   SKDATA(data)
    
class SKDATA(JSON):
    """A display class for displaying SKDATA visualizations in the Jupyter Notebook and IPython kernel.
    
    SKDATA expects a JSON-able dict, not serialized JSON strings.

    Scalar types (None, number, string) are not allowed, only dict containers.
    """

    def _ipython_display_(self):
        bundle = {
            'application/skdata+json': self.data,
            'text/plain': '<jupyterlab_skdata_renderer.SKDATA object>'
        }
        metadata = {
            'application/skdata+json': self.metadata
        }
        display(bundle, metadata=metadata, raw=True) 
