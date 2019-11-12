import { LocaleAwarePullRequest, PipelineConfig } from '../types';
import rimraf from 'rimraf';

export async function removePullrequests(pullRequest: LocaleAwarePullRequest, config: PipelineConfig) {
  rimraf.sync(config.pullrequestsDir);
  return pullRequest;
}
