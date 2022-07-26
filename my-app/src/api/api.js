const defaultErrorResponse = {
  error: 'Something went wrong. Please try again later',
}

const makeRequest = async (method = 'GET', path, body) => {
  try {
    const res = await fetch(`http://localhost:3004${path}`, {
      method,
      ...(body && {
        body: JSON.stringify(body),
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return await res.json()
  } catch (error) {
    console.log(`makeRequest error: `, error)
    return defaultErrorResponse
  }
}

export const Api = {
  async getAboutUs(data, setData) {
    const aboutUs = await makeRequest('GET', '/about_us')
    setData({
      ...data,
      aboutUs,
    })
  },
  async getTeamMember(data, setData) {
    const teamMember = await makeRequest('GET', '/team_mebmer_content')
    setData({
      ...data,
      teamMember,
    })
  },
  async getClientsFeedbacks(data, setData) {
    const clientsFeedback = await makeRequest('GET', '/clients_feedback')
    setData({
      ...data,
      clientsFeedback,
    })
  },
}
