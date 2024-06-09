html
├── head
│   ├── meta (charset="UTF-8")
│   ├── meta (name="viewport")
│   ├── link (rel="stylesheet" href="/css/styles.css")
│   ├── link (rel="icon" href="/images/uvmlogo.png" type="image/png")
│   └── title (text="Dejar Comentario")
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
    │   ├── div (class="gifs")
    │   │   └── img (src="/images/comentario.gif", class="comentario", alt="Comentario")
    │   ├── h1 (text="¡Deja un comentario!")
    │   ├── form (action="/contacto", method="POST", class="form-contact")
    │   │   ├── div (class="formulario")
    │   │   │   ├── label (for="nombre", text="Nombre:")
    │   │   │   └── input (type="text", id="nombre", name="nombre", required)
    │   │   ├── div (class="formulario")
    │   │   │   ├── label (for="email", text="Email:")
    │   │   │   └── input (type="email", id="email", name="email", required)
    │   │   ├── div (class="formulario")
    │   │   │   ├── label (for="asunto", text="Asunto:")
    │   │   │   └── input (type="text", id="asunto", name="asunto", required)
    │   │   ├── div (class="formulario")
    │   │   │   ├── label (for="mensaje", text="Mensaje:")
    │   │   │   └── textarea (id="mensaje", name="mensaje", required)
    │   │   └── button (type="submit", text="Enviar")
    └── footer
        └── p (text="&copy; 2024B - FRONTEND - UVM")
