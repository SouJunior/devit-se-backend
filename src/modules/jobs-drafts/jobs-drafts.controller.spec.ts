import { Test, TestingModule } from '@nestjs/testing';
import { JobsDraftsController } from './jobs-drafts.controller';
import { JobsDraftsService } from './services/jobs-drafts.service';

describe('JobsDraftsController', () => {
  let controller: JobsDraftsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobsDraftsController],
      providers: [JobsDraftsService],
    }).compile();

    controller = module.get<JobsDraftsController>(JobsDraftsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
