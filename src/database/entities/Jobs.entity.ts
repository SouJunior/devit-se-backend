import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { CompanyEntity } from "./company.entity" 
@Entity()
export class JobsEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    jobTitle: string

    @Column()
    jobLevel: string

    @Column()
    publicityChannel: string

    @Column()
    jobStatus: boolean

    @Column()
    jobFormat: string

    @Column({ nullable: true })
    contractType: string;

    @Column({ nullable: true })
    salary: string

    @Column({nullable: true})
    benefits: string

    @Column({ nullable: true })
    jobDescription: string

    @Column({ nullable: true })
    softRequirements: string

    @Column({ nullable: true })
    hardRequirements: string

    @Column({
    nullable: true,
    })
    devitRating: string

    @Column()
    companyName: string

    @Column({ default: new Date()})
    publicationDate: Date

    @Column({ nullable: true})
    finishDate: Date

    @ManyToOne(() => CompanyEntity)
    @JoinColumn({ name: 'company_id'})
    company: CompanyEntity;

    @Column()
    company_id: string;

    constructor(jobs: Partial<JobsEntity>) {
        Object.assign(this, jobs)
    }
}
