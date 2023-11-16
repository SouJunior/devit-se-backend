import { JobsEntity } from "src/database/entities/Jobs.entity"

export class InfoEntity {
    id?: string
    companyName?: string
    cnpj?: string
    sector?: string
    address?: string
    complement?: string
    district?: string
    jobs?: JobsEntity[]
}