/**
 * Created by Ablo on 26/02/2018.
 */
$(function () {
    const mansonnryGrid = {
        init : function () {
            this.mansonnryFunc('#home-grid .item-bloc', '.flex-grid-home');
        },
        mansonnryFunc : function (itemBloc, insertZone) {
            let blocElm = $(itemBloc),
                zoneInsert = $(insertZone),
                globaleTable = [],
                supportSize = $(window).width();
            blocElm.each(function () {
                globaleTable.push($(this));
            });
            const makeColumn = (compt, colNum, className) =>{
                for (let i=compt; i < globaleTable.length; i=i+colNum){
                    $(className).append(globaleTable[i]);
                }
            };
            const desktopLayout = () =>{
                makeColumn(0, 3,zoneInsert[0]);
                makeColumn(1, 3,zoneInsert[1]);
                makeColumn(2, 3,zoneInsert[2]);
            };
            const tabletteLayout = () =>{
                makeColumn(0, 2, zoneInsert[0]);
                makeColumn(1, 2, zoneInsert[1]);
            };
            const mobileLayout = () =>{
                makeColumn(0, 1, zoneInsert[0]);
            };
            const supportLimit = () =>{
                if (supportSize > 968){
                    zoneInsert.css('width','33.33333%');
                    desktopLayout();
                }else if (supportSize <=968 && supportSize > 480){
                    zoneInsert.css('width','50%');
                    tabletteLayout();
                }else {
                    zoneInsert.css('width','100%');
                    mobileLayout();
                }
            };
            supportLimit();
            $(window).on('resize', function () {
                supportSize = $(window).width();
                supportLimit();
            });
        }
    };
    mansonnryGrid.init();
});
