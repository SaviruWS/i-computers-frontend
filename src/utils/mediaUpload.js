import { createClient } from "@supabase/supabase-js"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3c2x0Z2NlaG9obXphZXNzZGdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg2NzA2ODMsImV4cCI6MjA4NDI0NjY4M30.qYH_7gArtMYxsgYefGT46nCogJdRba1ooIRHMdtwPA0"
const supabaseUrl = "https://lwsltgcehohmzaessdgb.supabase.co"

const supabase = createClient(supabaseUrl , supabaseKey)

export default function uploadFile(file){
    return new Promise(
        (resolve , reject)=>{

            if(file == null){
                reject("No file provided")
                return
            }

            const timestamp = new Date().getTime()
            const fileName = timestamp + "-"+file.name

            supabase.storage.from("images").upload(fileName , file , {
                upsert : false,
                cacheControl : 3600
            }).then(
                ()=>{
                    const url = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl
                    resolve(url)
                }
            ).catch(
                ()=>{
                    reject("Failed to upload file")
                }
            )

        }
    )
}