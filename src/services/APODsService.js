import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { nasaApi } from "./AxiosService"
import { APOD } from "../models/APOD"


const apiKey = 'api_key=FhS9hWB1xvglRsGwt0WYZtemxkRNNayfDhQYPbkb'

class APODsService {

  async getAPOD() {
    const res = await nasaApi.get(`/planetary/apod?${apiKey}`)
    logger.log(res.data)

    AppState.apod = new APOD(res.data)
  }
}

export const apodsService = new APODsService()