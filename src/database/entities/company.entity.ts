import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { JobsEntity } from "./Jobs.entity"

@Entity()
export class CompanyEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    companyName: string

    @Column({
        unique: true
    })
    companyUserName: string

    @Column()
    companyPassword: string

    @Column()
    cnpj: string
    
    @Column({
        nullable: true,
    })
    sector: string
    
    @Column()
    address: string

    @Column({ nullable: true})
    complement: string
    
    @Column({ nullable: true})
    district: string

    @OneToMany(() => JobsEntity, (jobs) => jobs.company)
    jobs: JobsEntity[]

    constructor(company: Partial<CompanyEntity>) {
        Object.assign(this, company)
    }
}
