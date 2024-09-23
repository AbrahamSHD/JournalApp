
export const fileUpload = async( file ) => {

  if ( !file ) throw new Error('No existe ningún archivo para subir')

  const cloudUrl = 'https://api.cloudinary.com/v1_1/dz2afsibw/upload';
  const formData = new FormData();
  
  formData.append( 'upload_preset', 'react-journal' )
  formData.append( 'file', file )

  try {
    
    const resp = await fetch( cloudUrl, {
      method: 'POST',
      body: formData
    })

    if ( !resp.ok ) throw new Error('No se pudo subir imagen')

    const clodResp = await resp.json();

    return clodResp.secure_url;

  } catch (error) {
    throw new Error( error.message )
  }

}
