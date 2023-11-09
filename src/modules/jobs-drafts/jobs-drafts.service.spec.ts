import { Test, TestingModule } from '@nestjs/testing';
import { JobsDraftsService } from './services/jobs-drafts.service';
import { describe, beforeEach, it, expect } from '@jest/globals';

describe('JobsDraftsService', () => {
  let service: JobsDraftsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobsDraftsService],
    }).compile();

    service = module.get<JobsDraftsService>(JobsDraftsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
