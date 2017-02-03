import AxiosProvider from '../../src/http/axios-provider';

it('should generate correct timestamp in seconds', () => {
    const ts = AxiosProvider.getTimestampInSeconds();

    expect(ts).toBeGreaterThan(0);
    expect(ts.toString()).not.toContain('.');
});

it('should return url with computed auth params', () => {
    const authUrl = AxiosProvider.authUrlWithTimestamp('url', 1486079489);
    expect(authUrl)
        .toEqual('url?ts=1486079489&apikey=298bab46381a6daaaee19aa5c8cafea5&hash=f5303eb12defa2a758740d1166c98c80');
});
