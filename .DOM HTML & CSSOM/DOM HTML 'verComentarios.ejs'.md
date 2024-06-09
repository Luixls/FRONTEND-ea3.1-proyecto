html
├── head
│   ├── meta (charset="UTF-8")
│   ├── meta (name="viewport")
│   ├── link (rel="stylesheet" href="/css/styles.css")
│   ├── link (rel="icon" href="/images/uvmlogo.png" type="image/png")
│   └── title (text="Ver Comentarios")
└── body
    ├── header
    │   └── nav
    │       └── ul
    │           ├── li
    │           │   └── a (href="/", text="Inicio")
    │           ├── li
    │           │   └── a (href="/about", text="Información")
    │           ├── li
    │           │   └── a (href="/contacto", text="Dejar un Comentario...")
    │           └── li
    │               └── a (href="/comentarios", text="Ver Comentarios")
    ├── main (class="container")
    │   ├── h1 (text="Comentarios")
    │   └── div (class="comentarios-container")
    │       └── conditional
    │           ├── if (comentarios.length > 0)
    │           │   └── foreach comentario, index in comentarios
    │           │       ├── div (class="comentario")
    │           │       │   ├── h4 (class="comentarios", text="Comentario " + (index + 1) + ":")
    │           │       │   ├── p (text="Asunto: " + comentario.asunto)
    │           │       │   └── p (text="Mensaje: " + comentario.mensaje)
    │           └── else
    │               └── p (text="No hay comentarios")
    └── footer
        └── p (text="&copy; 2024B - FRONTEND - UVM")
