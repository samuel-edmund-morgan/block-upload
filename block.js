addEventListener("fetch", event => {
    event.respondWith(handle(event.request))
  })
  
  async function handle(request) {
    if (request.method === "POST" &&
        new URL(request.url).pathname === "/upload") {
      const form = await request.formData()
      const file  = form.get("file")
      if (file && /\.(docx|pptx)$/i.test(file.name)) {
        return new Response("File type not allowed", { status: 403 })
      }
    }
    return fetch(request)
  }
  