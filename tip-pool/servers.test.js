describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    allServers = {};
    let serverTbody = document.querySelector('#serverTable tbody');
    serverTbody.innerHTML = "";
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should add all servers on updateServerTable()', function(){
    allServers = {
      "server0": { "serverName": "Alice"},
      "server1": { "serverName": "Tom"},
      "server2": { "serverName": "Jim"}
    }
    expect(Object.keys(allServers).length).toEqual(3);
    expect(allServers['server0'].serverName).toEqual('Alice');
    updateServerTable();
    const table = document.querySelector('#serverTable');
    const thirdRow = table.querySelector('tr:nth-child(3)');
    const firstTdValue = thirdRow.querySelector('td').innerText;
    expect(firstTdValue).toEqual("Jim");
  });

  afterEach(function() {
    let serverTbody = document.querySelector('#serverTable tbody');
    serverTbody.innerHTML = "";
    serverNameInput.value = '';
    allServers = {};
  });
});
