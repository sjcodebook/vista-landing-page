'use server'
import { google } from 'googleapis'

const getglAuth = async () => {
  const glAuth = await google.auth.getClient({
    credentials: {
      type: process.env.GOOGLE_TYPE,
      project_id: process.env.GOOGLE_PROJECT_ID,
      private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n') || '',
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      client_id: process.env.GOOGLE_CLIENT_ID,
      universe_domain: 'googleapis.com',
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  return glAuth
}

export async function getSheetData() {
  try {
    const glSheets = google.sheets({ version: 'v4', auth: await getglAuth() })

    const data = await glSheets.spreadsheets.values.get({
      spreadsheetId: '13cwG0SVjt5nhaL2juiK1OV-LDTdCN21PUmSIM3DH-8Y',
      range: 'Leads!A1:D',
    })

    return { data: data.data.values }
  } catch (error) {
    console.error(error)
    return { error: error }
  }
}

/*
@data: {values: Array of arrays of strings ex. [['email1'], ['email2']]}
*/
export async function createSheetData(data: any) {
  try {
    const values = JSON.parse(data)?.values
    const glSheets = google.sheets({ version: 'v4', auth: await getglAuth() })

    await glSheets.spreadsheets.values.append({
      spreadsheetId: '13cwG0SVjt5nhaL2juiK1OV-LDTdCN21PUmSIM3DH-8Y',
      range: `Leads!A${values.length + 1}`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values,
      },
    })

    return { message: 'Data added successfully' }
  } catch (error) {
    console.error(error)
    return { error: error }
  }
}
