import { Selector as $ } from 'testcafe';
import { server, url } from '../backend/server';

fixture('Warmup Project').page(url);

// Layout

test('title', async t => {
  await server;
  const h1 = (await $('h1').innerText).trim();
  const h2 = (await $('h2').innerText).trim();
  const title = `${h1} - ${h2}`;
  await t
    .expect($('title').innerText).eql(title, 'title should be "header - subheader"');
});

test('headers', async t => {
  await server;
  const h1 = (await $('h1').innerText).trim();
  const h2 = (await $('h2').innerText).trim();
  await t
    .expect(h1).eql('WarsawJS Workshop #23', 'should have correct header')
    .expect(h2).eql('Warmup Project', 'should have correct subheader');
});

// Add

test('add 0 + 0', async t => {
  await server;
  await t.click('#add').click('#n0').click('#n0');
  const result = (await $('#result').innerText).trim();
  await t.expect(result).eql('0');
});

test('add 0 + 1', async t => {
  await server;
  await t.click('#add').click('#n0').click('#n1');
  const result = (await $('#result').innerText).trim();
  await t.expect(result).eql('1');
});

test('add 1 + 0', async t => {
  await server;
  await t.click('#add').click('#n1').click('#n0');
  const result = (await $('#result').innerText).trim();
  await t.expect(result).eql('1');
});

test('add 1 + 1', async t => {
  await server;
  await t.click('#add').click('#n1').click('#n1');
  const result = (await $('#result').innerText).trim();
  await t.expect(result).eql('2');
});

test('add 4 + 8', async t => {
  await server;
  await t.click('#add').click('#n4').click('#n8');
  const result = (await $('#result').innerText).trim();
  await t.expect(result).eql('12');
});

test('add 8 + 4', async t => {
  await server;
  await t.click('#add').click('#n8').click('#n4');
  const result = (await $('#result').innerText).trim();
  await t.expect(result).eql('12');
});

// Sub

test('sub 0 - 0', async t => {
  await server;
  await t.click('#sub').click('#n0').click('#n0');
  const result = (await $('#result').innerText).trim();
  await t.expect(result).eql('0');
});

test('sub 0 - 1', async t => {
  await server;
  await t.click('#sub').click('#n0').click('#n1');
  const result = (await $('#result').innerText).trim();
  await t.expect(result).eql('-1');
});

test('sub 1 - 0', async t => {
  await server;
  await t.click('#sub').click('#n1').click('#n0');
  const result = (await $('#result').innerText).trim();
  await t.expect(result).eql('1');
});

test('sub 1 - 1', async t => {
  await server;
  await t.click('#sub').click('#n1').click('#n1');
  const result = (await $('#result').innerText).trim();
  await t.expect(result).eql('0');
});

test('sub 4 - 8', async t => {
  await server;
  await t.click('#sub').click('#n4').click('#n8');
  const result = (await $('#result').innerText).trim();
  await t.expect(result).eql('-4');
});

test('sub 8 - 4', async t => {
  await server;
  await t.click('#sub').click('#n8').click('#n4');
  const result = (await $('#result').innerText).trim();
  await t.expect(result).eql('4');
});

// Mul

test('mul 0 * 0', async t => {
  await server;
  await t.click('#mul').click('#n0').click('#n0');
  const result = (await $('#result').innerText).trim();
  await t.expect(result).eql('0');
});

test('mul 0 * 1', async t => {
  await server;
  await t.click('#mul').click('#n0').click('#n1');
  const result = (await $('#result').innerText).trim();
  await t.expect(result).eql('0');
});

test('mul 1 * 0', async t => {
  await server;
  await t.click('#mul').click('#n1').click('#n0');
  const result = (await $('#result').innerText).trim();
  await t.expect(result).eql('0');
});

test('mul 1 * 1', async t => {
  await server;
  await t.click('#mul').click('#n1').click('#n1');
  const result = (await $('#result').innerText).trim();
  await t.expect(result).eql('1');
});

test('mul 4 * 8', async t => {
  await server;
  await t.click('#mul').click('#n4').click('#n8');
  const result = (await $('#result').innerText).trim();
  await t.expect(result).eql('32');
});

test('mul 8 * 4', async t => {
  await server;
  await t.click('#mul').click('#n8').click('#n4');
  const result = (await $('#result').innerText).trim();
  await t.expect(result).eql('32');
});

// Div

test('div 0 / 0', async t => {
  await server;
  await t.click('#div').click('#n0').click('#n0');
  const result = (await $('#result').innerText).trim();
  await t.expect(result).eql('NaN');
});

test('div 0 / 1', async t => {
  await server;
  await t.click('#div').click('#n0').click('#n1');
  const result = (await $('#result').innerText).trim();
  await t.expect(result).eql('0');
});

test('div 1 / 0', async t => {
  await server;
  await t.click('#div').click('#n1').click('#n0');
  const result = (await $('#result').innerText).trim();
  await t.expect(result).eql('Infinity');
});

test('div 1 / 1', async t => {
  await server;
  await t.click('#div').click('#n1').click('#n1');
  const result = (await $('#result').innerText).trim();
  await t.expect(result).eql('1');
});

test('div 4 / 8', async t => {
  await server;
  await t.click('#div').click('#n4').click('#n8');
  const result = (await $('#result').innerText).trim();
  await t.expect(result).eql('0.5');
});

test('div 8 / 4', async t => {
  await server;
  await t.click('#div').click('#n8').click('#n4');
  const result = (await $('#result').innerText).trim();
  await t.expect(result).eql('2');
});
