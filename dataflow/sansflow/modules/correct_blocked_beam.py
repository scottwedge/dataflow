"""
Uses transmission and blocked bean file 
"""

from ... import config
from ...core import Module

def correct_blocked_beam_module(id=None, datatype=None, action=None,
                 version='0.0', fields={}, **kwargs):
    """[Tsam/Temp](EMP - BGD)"""

    icon = {
        'URI': config.IMAGES + "correct_blocked_beam.png",
        'terminals': {
            'input': (0, 10, -1, 0),
            'output': (20, 10, 1, 0),
        }
    }
    
    terminals = [
        dict(id='input',
             datatype=datatype,
             use='in',
             description='data',
             required=False,
             multiple=True,
             ),
        dict(id='output',
             datatype=datatype,
             use='out',
             description='blocked_beam correction',
             ),
    ]

    # Combine everything into a module.
    module = Module(id=id,
                  name='correct_blocked_beam',
                  version=version,
                  description=action.__doc__,
                  icon=icon,
                  terminals=terminals,
                  fields=fields,
                  action=action,
                  **kwargs
                  )

    return module
