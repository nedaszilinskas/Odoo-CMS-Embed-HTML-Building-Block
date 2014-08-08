{
    'name': 'Embed HTML Building Block',
    'category': 'Website',
    'summary': 'This is custom Odoo building block',
    'version': '1.0',
    'description': """
Embed HTML Building Block for Odoo CMS
======================================
This module appends the Odoo website builder building blocks collection with one more - HTML embedding building block.
        """,
    'author': 'Nedas Žilinskas • WebByBrains <nedas@webbybrains.com>',
    'depends': [
        'website'
        ],
    'data': [
        'views/assets.xml',
        'views/snippet.xml'
    ],
    'installable': True
}