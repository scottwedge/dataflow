"""
Join data sets
"""

from .. import config
from ..core import Module

def autogrid_module(id=None, datatype=None, action=None,
                version='0.0', fields=[],
                description="Autogrid multiple datasets"):
    """
    Return a module for that makes a grid to cover all of the data sets
    """

    icon = {
        'URI': config.MEDIA + '/grid.png',
        'terminals': {
            'input': (-15, 1, -1, 0),
            'output': (15, 1, 1, 0),
        }
    }
    
    
    terminals = [
        dict(id='input',
             datatype=datatype,
             use='in',
             description='Data parts',
             required=False,
             multiple=True,
             ),
        dict(id='output',
             datatype=datatype,
             use='out',
             description='Newly-gridded data',
             ),
    ]
    
    
    # Combine everything into a module.
    module = Module(id=id,
                  name='Autogrid',
                  version=version,
                  description=description,
                  icon=icon,
                  terminals=terminals,
                  fields=fields,
                  action=action,
                  )

    return module
